import { useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import { Section } from "../components/ui/Section";
import { EndpointList } from "../components/EndpointList";
import { EndpointInfo } from "../components/EndpointInfo";
import {
  EndpointFamily,
  EndpointIDs,
  InitialEndpoints,
} from "../store/endpoint";
import { nanoid } from "nanoid";
import { useSetAtom } from "jotai";

export function EndpointSection() {
  const setId = useSetAtom(EndpointIDs);
  useEffect(() => {
    EndpointFamily.setShouldRemove(() => true); // set function to remove all
    EndpointFamily.setShouldRemove(null);
    setId([]);
    InitialEndpoints.forEach((v) => {
      const uid: string = nanoid();
      EndpointFamily({
        id: uid,
        label: v.label,
        value: v.value,
        lastIndex: undefined,
        clients: undefined,
      });
      setId((prev) => [...prev, uid]);
    });
  }, []);

  return (
    <Section>
      <Heading>Endpoint</Heading>
      <EndpointList />
      <EndpointInfo />
    </Section>
  );
}
