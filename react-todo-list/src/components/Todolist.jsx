import {
    Card,
    CardHeader,
    CardBody,
    Heading,
    Stack,
    Box,
    Text,
    StackDivider,
    Input,
    HStack,
} from "@chakra-ui/react";

export default function Cardlist() {
    return (
      <>
        <Card fontWeight={"light"} mx={"auto"} my={"100px"} width={"60%"}>
                <CardHeader>
                    <HStack>
                        
                    </HStack>
            <Heading mb={3} fontWeight={"light"} size="md">
              React to-do-list
            </Heading>
            <Input size={"sm"} width={"60%"} />
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading
                  fontWeight={"light"}
                  size="xs"
                  textTransform="uppercase"
                >
                  Summary
                </Heading>
                <Text pt="2" fontSize="sm">
                  View a summary of all your clients over the last month.
                </Text>
              </Box>
              <Box>
                <Heading
                  fontWeight={"light"}
                  size="xs"
                  textTransform="uppercase"
                >
                  Overview
                </Heading>
                <Text pt="2" fontSize="sm">
                  Check out the overview of your clients.
                </Text>
              </Box>
              <Box>
                <Heading
                  fontWeight={"light"}
                  size="xs"
                  textTransform="uppercase"
                >
                  Analysis
                </Heading>
                <Text pt="2" fontSize="sm">
                  See a detailed analysis of all your business clients.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </>
    );
}


