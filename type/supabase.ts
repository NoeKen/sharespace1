/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/activity": {
    get: {
      parameters: {
        query: {
          name?: parameters["rowFilter.activity.name"];
          description?: parameters["rowFilter.activity.description"];
          compagny?: parameters["rowFilter.activity.compagny"];
          picture_url?: parameters["rowFilter.activity.picture_url"];
          seasons?: parameters["rowFilter.activity.seasons"];
          location?: parameters["rowFilter.activity.location"];
          address?: parameters["rowFilter.activity.address"];
          city?: parameters["rowFilter.activity.city"];
          postal_code?: parameters["rowFilter.activity.postal_code"];
          phone?: parameters["rowFilter.activity.phone"];
          social_media?: parameters["rowFilter.activity.social_media"];
          price?: parameters["rowFilter.activity.price"];
          carbon_footprint?: parameters["rowFilter.activity.carbon_footprint"];
          id?: parameters["rowFilter.activity.id"];
          email?: parameters["rowFilter.activity.email"];
          website?: parameters["rowFilter.activity.website"];
          created_at?: parameters["rowFilter.activity.created_at"];
          review?: parameters["rowFilter.activity.review"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["activity"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** activity */
          activity?: definitions["activity"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          name?: parameters["rowFilter.activity.name"];
          description?: parameters["rowFilter.activity.description"];
          compagny?: parameters["rowFilter.activity.compagny"];
          picture_url?: parameters["rowFilter.activity.picture_url"];
          seasons?: parameters["rowFilter.activity.seasons"];
          location?: parameters["rowFilter.activity.location"];
          address?: parameters["rowFilter.activity.address"];
          city?: parameters["rowFilter.activity.city"];
          postal_code?: parameters["rowFilter.activity.postal_code"];
          phone?: parameters["rowFilter.activity.phone"];
          social_media?: parameters["rowFilter.activity.social_media"];
          price?: parameters["rowFilter.activity.price"];
          carbon_footprint?: parameters["rowFilter.activity.carbon_footprint"];
          id?: parameters["rowFilter.activity.id"];
          email?: parameters["rowFilter.activity.email"];
          website?: parameters["rowFilter.activity.website"];
          created_at?: parameters["rowFilter.activity.created_at"];
          review?: parameters["rowFilter.activity.review"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          name?: parameters["rowFilter.activity.name"];
          description?: parameters["rowFilter.activity.description"];
          compagny?: parameters["rowFilter.activity.compagny"];
          picture_url?: parameters["rowFilter.activity.picture_url"];
          seasons?: parameters["rowFilter.activity.seasons"];
          location?: parameters["rowFilter.activity.location"];
          address?: parameters["rowFilter.activity.address"];
          city?: parameters["rowFilter.activity.city"];
          postal_code?: parameters["rowFilter.activity.postal_code"];
          phone?: parameters["rowFilter.activity.phone"];
          social_media?: parameters["rowFilter.activity.social_media"];
          price?: parameters["rowFilter.activity.price"];
          carbon_footprint?: parameters["rowFilter.activity.carbon_footprint"];
          id?: parameters["rowFilter.activity.id"];
          email?: parameters["rowFilter.activity.email"];
          website?: parameters["rowFilter.activity.website"];
          created_at?: parameters["rowFilter.activity.created_at"];
          review?: parameters["rowFilter.activity.review"];
        };
        body: {
          /** activity */
          activity?: definitions["activity"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  activity: {
    name?: {
      en: string,
      fr: string
    };
    description?: {
      en: string,
      fr: string
    };
    compagny?: string;
    picture_url?: string;
    address?: string;
    city?: string;
    postal_code?: string;
    phone?: string;
    social_media: {
      facebook: string,
      youtube: string,
      instagram: string
    };
    price?: number;
    carbon_footprint?: number;
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    seasons?: string[];
    email?: string;
    website?: string;
    created_at?: string;
    location?: string;
    review?: {
      en: string,
      fr: string
    };
  };
}

export interface parameters {
  /** Preference */
  preferParams: "params=single-object";
  /** Preference */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /** Preference */
  preferCount: "count=none";
  /** Filtering Columns */
  select: string;
  /** On Conflict */
  on_conflict: string;
  /** Ordering */
  order: string;
  /** Limiting and Pagination */
  range: string;
  /** Limiting and Pagination */
  rangeUnit: string;
  /** Limiting and Pagination */
  offset: string;
  /** Limiting and Pagination */
  limit: string;
  /** activity */
  "body.activity": definitions["activity"];
  "rowFilter.activity.name": string;
  "rowFilter.activity.description": string;
  "rowFilter.activity.compagny": string;
  "rowFilter.activity.picture_url": string;
  "rowFilter.activity.seasons": string;
  "rowFilter.activity.location": string;
  "rowFilter.activity.address": string;
  "rowFilter.activity.city": string;
  "rowFilter.activity.postal_code": string;
  "rowFilter.activity.phone": string;
  "rowFilter.activity.social_media": string;
  "rowFilter.activity.price": string;
  "rowFilter.activity.carbon_footprint": string;
  "rowFilter.activity.id": string;
  "rowFilter.activity.email": string;
  "rowFilter.activity.website": string;
  "rowFilter.activity.created_at": string;
  "rowFilter.activity.review": string;
}

export interface operations { }

export interface external { }
