import React from "react";

type SchemaMarkupProps = {
  schemas: Record<string, any>[];
};

export const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ schemas }) => {
  if (!schemas || schemas.length === 0) return null;

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};
