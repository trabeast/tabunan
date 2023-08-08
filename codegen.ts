import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [`${process.env.NEXT_PUBLIC_SUPABASE_URL}/graphql/v1`]: {
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      },
    },
  },
  documents: 'lib/queries/**/*.ts',
  generates: {
    'gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
