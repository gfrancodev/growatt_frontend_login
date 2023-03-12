import { Box, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";

export const CourseListSkeleton = () => {
  const bg = "#0F0F0F";

  return (
    <Stack spacing={3} w={"full"}>
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <Box
            key={index}
            w={"full"}
            bg={bg}
            shadow={"base"}
            rounded={"lg"}
            overflow={"hidden"}
            p={6}
          >
            <Stack spacing={4}>
              <Skeleton height="20px" />
              <SkeletonText
                mt="4"
                noOfLines={3}
                spacing="4"
                skeletonHeight="2"
              />
            </Stack>
          </Box>
        ))}
    </Stack>
  );
};
