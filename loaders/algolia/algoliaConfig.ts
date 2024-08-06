import { Secret } from "apps/website/loaders/secret.ts";
import algolia from "https://esm.sh/algoliasearch@4.20.0";
import { createFetchRequester } from "npm:@algolia/requester-fetch@4.20.0";

export interface Props {
    indexName: string;
    applicationId: string;
    searchAPIKey: Secret;
    writeAPIKey?: Secret;
    adminAPIKey: string;
}

export type Algolia = Partial<{
    indexName: string;
    applicationId: string;
    searchAPIKey: Secret;
    writeAPIKey?: Secret;
    adminAPIKey: Secret;
}>;

/** @title Supabas config setup */
export default function loader(
    { indexName, applicationId, searchAPIKey, writeAPIKey, adminAPIKey }: Props,
): Algolia {
    const client = algolia(applicationId, adminAPIKey, {
        requester: createFetchRequester(), // Fetch makes it perform mutch better
    });

    const index = client.initIndex(indexName);

    return {};
}
