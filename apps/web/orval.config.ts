import { defineConfig } from 'orval';

export default defineConfig({
  api: {
    input: {
      target: 'http://localhost:8080/swagger/yaml',
      // validation: true,
    },
    output: {
      target: './lib/api-client/_generated.ts',
      client: 'react-query',
      mode: 'single',
      indexFiles: false, // Ensure no additional index files are created
      prettier: true,
      override: {
        mutator: {
          path: './lib/api-client/axios.ts',
          name: 'customInstance',
        },
        query: {
          useQuery: true,
          useMutation: true,
        },
      },
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write',
    },
  },
});
