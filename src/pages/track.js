import React from 'react';
import {Layout} from '../components';
import {gql, useQuery} from "@apollo/client";
import QueryResult from "../components/query-result";
import TrackDetail from "../components/track-detail";

const GET_TRACK = gql`
    query getTrack($id: ID!) {
        track(id: $id) {
            id
            title
            author {
                id
                name
                photo
            }
            thumbnail
            length
            modulesCount
            numberOfViews
            modules {
                id
                title
                length
            }
            description
        }
    }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Track = ({trackId}) => {
    const {loading, error, data} = useQuery(GET_TRACK, {
        variables: {
            id: trackId
        }
    });

    return <Layout grid>
        <QueryResult loading={loading} error={error} data={data}>
            <TrackDetail track={data?.track}/>
        </QueryResult>
    </Layout>
        ;
};

export default Track;
