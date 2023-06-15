import { HStack, IconButton, Icon } from "@chakra-ui/react";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentType, PropsWithChildren } from "react";
import { useNavigate } from "react-router";

export type Page = ComponentType & {
  Layout?: React.FC<PropsWithChildren>;
};

export function Layout({ children }: PropsWithChildren) {
  const nav = useNavigate();
  return (
    <div className="flex flex-col min-h-full">
      <div className="container place-self-center rounded-2xl shadow-2xl my-auto mx-12 p-6 w-auto">
        <HStack spacing={4} align="left">
          <IconButton
            colorScheme="teal"
            aria-label="Back"
            icon={
              <Icon
                as={FontAwesomeIcon}
                icon={faBackward}
                onClick={() => nav(-1)}
              />
            }
          ></IconButton>
          <IconButton
            colorScheme="teal"
            aria-label="Forward"
            icon={
              <Icon
                as={FontAwesomeIcon}
                icon={faForward}
                onClick={() => nav(1)}
              />
            }
          ></IconButton>
        </HStack>
        {children}
      </div>
    </div>
  );
}
