import React,{useEffect} from 'react'
import {Container,Heading,Button,Flex} from 'theme-ui';
import netlifyIdentity from 'netlify-identity-widget';


const Index = () => {
    useEffect(()=>{
 netlifyIdentity.init({});
    });
   
    return (
        <Container>
            <Flex sx={{flexDirection:"column",padding:3}}>
            <Heading as="h1"> Keep Track of your Todos</Heading>
            <Button
            sx={{marginTop:2}}
            onClick={()=>{
              netlifyIdentity.open();
            }}
            >
                Log in</Button>
        
                <Button
            sx={{marginTop:2}}
            onClick={()=>{
              console.log(netlifyIdentity.currentUser())
            }}
            >
                Log in</Button>

        </Flex>
        </Container>
    )
}
export default Index
