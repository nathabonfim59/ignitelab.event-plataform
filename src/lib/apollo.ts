import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4tk1gq605lr01uk1zpm9jxz/master',
    cache: new InMemoryCache()
})

export default client
