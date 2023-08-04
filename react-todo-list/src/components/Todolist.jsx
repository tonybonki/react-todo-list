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
  Image,
  HStack,
} from "@chakra-ui/react";

export default function Cardlist() {
  return (
    <>
      <Card
        fontWeight={"light"}
        mx={"auto"}
        my={"100px"}
        width={{ base: "90%", sm: "40%" }}
      >
        <CardHeader>
          <Box>
            <Image
              mx={"auto"}
              mb={6}
              h="65px"
              src="../../images/logos/logo2.png"
            ></Image>
          </Box>
          <HStack>
            <Input size={"sm"} />
          </HStack>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading fontWeight={"light"} size="xs" textTransform="uppercase">
                Summary
              </Heading>
              <Text pt="2" fontSize="sm">
                View a summary of all your clients over the last month.
              </Text>
            </Box>
            <Box>
              <Heading fontWeight={"light"} size="xs" textTransform="uppercase">
                Overview
              </Heading>
              <Text pt="2" fontSize="sm">
                Check out the overview of your clients.
              </Text>
            </Box>
            <Box>
              <Heading fontWeight={"light"} size="xs" textTransform="uppercase">
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
