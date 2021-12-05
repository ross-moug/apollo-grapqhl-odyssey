import React from 'react';
import {Layout} from '../components';
import {gql, useQuery} from "@apollo/client";
import ModuleDetail from "../components/module-detail";
import QueryResult from "../components/query-result";

const GET_MODULE = gql`
    query GetModuleAndTrack($moduleId: ID!
                            $trackId: ID!) {
      module(id: $moduleId) {
          id
          title
          durationInSeconds
          videoUrl
          content
      }
      track(id: $trackId)  {
        id
        title
        modules {
          id
          title
        }
      }
    }
`;

/**
 *
 */
const Module = ({ moduleId, trackId }) => {
    const {loading, error, data} = useQuery(GET_MODULE, {
        variables: { moduleId, trackId }
    });

    return <Layout fullWidth>
        <QueryResult loading={loading} error={error} data={data}>
            <ModuleDetail track={data?.track} module={data?.module}/>
        </QueryResult>
    </Layout>
        ;
};

export default Module;

