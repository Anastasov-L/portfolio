import { Button, Menu, Portal, Image, Text } from "@chakra-ui/react"
import burger from "../../images/burger-menu.png"

interface AboutMeProps {
  setPage: (page: number) => void;
}

const AboutMe = ({ setPage }: AboutMeProps) => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button
          size="sm"
          bg="none"
          outline="none"
          display="flex"
          boxSize="80px"
          alignContent="flex-bottom"
        >
          <Image src={burger} />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content bg="aqua">
            <Menu.Item value="about" onSelect={() => setPage(0)}>
              About
            </Menu.Item>
            <Menu.Item value="education" onSelect={() => setPage(1)}>
              Education
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default AboutMe;
