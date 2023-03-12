import { AspectRatio, Heading, Stack, Text } from "@chakra-ui/react";
import { Rating } from "@components/_ui/Rating";
import { AvatarComponent } from "./Avatar";

interface LastSeenCourseProps {
  src: string;
  courseName: string;
  courseDescription: string;
  stars: number;
  photo: string;
  name: string;
  description: string;
}

export const LastSeenCourse = ({
  src,
  courseName,
  courseDescription,
  stars,
  photo,
  name,
  description,
}: LastSeenCourseProps) => {
  return (
    <Stack spacing={3} w={"full"}>
      <AspectRatio maxW={615} maxH={382} ratio={1}>
        <iframe title={courseName} src={src} allowFullScreen />
      </AspectRatio>

      {/* <Rating number={stars} /> */}

      <Heading
        as="h2"
        fontSize={{
          base: 16,
          md: 20,
        }}
        fontWeight={"bold"}
      >
        {courseName}
      </Heading>

      <Text
        fontSize={{
          base: 12,
          md: 14,
        }}
        noOfLines={4}
      >
        {courseDescription}
      </Text>

      <AvatarComponent
        src={photo}
        name={name}
        title={courseName}
        description={description}
      />
    </Stack>
  );
};
// "https://bit.ly/sage-adebayo";
