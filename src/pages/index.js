import React from 'react'
import {Container,Heading,Button,Flex} from 'theme-ui';



const Index = () => {
    return (
        <Container>
            <Flex sx={{flexDirection:"column",padding:3}}>
            <Heading as="h1"> Keep Track of your Todos</Heading>
            <Button
            sx={{marginTop:2}}
            onClick={()=>{
               alert('button clicked')
            }}
            >
                Log in</Button>
        </Flex>
        </Container>
    )
}
export default Index
