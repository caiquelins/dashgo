import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Caique Lins</Text>
          <Text color="gray.300" fontSize="small">
            caique.c.lins@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Caique Lins" src="https://github.com/caiquelins.png" />
    </Flex>
  );
}
