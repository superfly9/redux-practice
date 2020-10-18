import React from 'react';
import {gql} from 'apollo-boost'
import {Query} from 'react-apollo';

const GET_CONTINETS = gql`
    query {
        continents {
            code
            name
        }
    }
`

//gql`query문`형태
export default function Continents () {
    return (
        <div>
            <h2>Contients</h2>
            {/*Quey Component-이 컴포넌트 안에는 함수를 넣어줘야 */}
            <Query query={GET_CONTINETS}>
                {({loading,error,data})=>{
                    if (loading) return <p>...Loading</p>
                    if (error) return <p>Error!</p>
                    return (
                        <ul>
                            {data.continents.map(({code,name})=>(
                                <li key={code}>{name}</li>
                            ))}
                        </ul>
                    )
                }}
            </Query>
        </div>
    )
}