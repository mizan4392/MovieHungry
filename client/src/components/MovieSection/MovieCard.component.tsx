import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";
import React from "react";

export interface MovieCardI {
  movieThumbUrl?: string;
  name?: string;
}

export function MovieCard({ movieThumbUrl, name }: MovieCardI) {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder className="cursor-pointer">
      <Card.Section>
        <Image src={movieThumbUrl} height={400} alt="Norway" />
      </Card.Section>
      <h2 className="text-black text-center ">{name}</h2>
    </Card>
  );
}
