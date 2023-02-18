// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { supabase } from "../../helpers/supabaseClient";
import { definitions } from "../../type/supabase";

type Params = {
    id: string;
    query: string;
    price: string;
    season: string;
    fields: string;
    carbon_footprint: string;
    locale: "en" | "fr";
    slug: string;
    children_accessible: string;
};

export default async function activities(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const {
            query,
            id,
            season,
            locale,
            fields = "*",
            price,
            carbon_footprint,
            slug,
            children_accessible,
        } = req.query as Params;
        const supabaseBase = supabase
            .from<definitions["activity"]>("activity")
            .select(fields)
            .order(`name->>${locale}` as "name");

        let result;
        if (id) {
            result = await singleActivityById(supabaseBase, { id });
            return sendReponse(res, result);
        }
        if (slug) {
            result = await singleActivityBySlug(supabaseBase, { slug });
            return sendReponse(res, result);
        }
        if (
            query ||
            season ||
            price ||
            carbon_footprint ||
            children_accessible
        ) {
            result = await filterActivities(supabaseBase, {
                query,
                season,
                locale,
                price,
                carbon_footprint,
                children_accessible,
            });

            if (result.error) {
                return res.status(500).json({ error: result.error });
            }
        } else {
            result = await supabaseBase;
        }

        result.data = result.data?.map((activity: any) =>
            normalizeActivity(activity)
        );

        if (fields !== "id" && fields !== "slug") {
            result.data = result.data?.filter(
                (activity: definitions["activity"]) => {
                    return (
                        activity.picture_url &&
                        activity.location &&
                        activity.website
                    );
                }
            );
        }
        return sendReponse(res, result);
    } catch (error) {
        return res.status(500).json({ error });
    }
}

const singleActivityById = async (
    supabaseBase: any,
    { id }: { id: Params["id"] }
) => supabaseBase.eq("id", id).single();
const singleActivityBySlug = async (
    supabaseBase: any,
    { slug }: { slug: Params["slug"] }
) => supabaseBase.eq("slug", slug).single();

const filterActivities = async (
    supabaseBase: any,
    {
        query,
        season,
        locale,
        price,
        carbon_footprint,
        children_accessible,
    }: Partial<Params>
) => {
    if (query) {
        supabaseBase.or(
            `name->>${locale}.ilike.%${query}%,compagny.ilike.%${query}%,description->>${locale}.ilike.%${query}%`
        );
    }
    if (season) {
        supabaseBase.or(
            `seasons->>0.eq.${season},seasons->>1.eq.${season},seasons->>2.eq.${season},seasons->>3.eq.${season}`
        );
    }
    if (price) {
        const [min, max] = price.split(",");
        supabaseBase.gte("price", min);
        supabaseBase.lte("price", max);
    }
    if (carbon_footprint) {
        supabaseBase.gte("carbon_footprint", carbon_footprint);
    }
    if (children_accessible) {
        supabaseBase.eq("children_accessible", children_accessible);
    }
    return supabaseBase;
};

const sendReponse = (res: NextApiResponse<any>, result: any) => {
    res.statusCode = result.status;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(result.data));
};

const normalizeActivity = (activity: any) => {
    if (activity.new_location) {
        activity.location = {
            lat: activity.new_location.coordinates[1],
            lng: activity.new_location.coordinates[0],
        };
    }

    if (activity.new_picture_url) {
        activity.picture_url = `https://acti.anzieu.fr/assets/${activity.new_picture_url}`;
    }
    return activity;
};
