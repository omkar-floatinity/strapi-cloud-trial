type ProviderOptions = {
  accessKeyId: string;
  secretAccessKey: string;
  region: string;
  params: {
    ACL: string;
    signedUrlExpires: number;
    Bucket: string;
  };
baseUrl:any;
};

type PluginConfig = {
  upload: {
    config: {
      provider: string;
      providerOptions: any;
      actionOptions: {
        upload: Record<string, unknown>;
        uploadStream: Record<string, unknown>;
        delete: Record<string, unknown>;
      };
    };
  };
};

export default ({
  env,
}: {
  env: (key: string, defaultValue?: any) => string | number;
}): PluginConfig => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID") as string ,
        secretAccessKey: env("AWS_ACCESS_SECRET") as string ,
        region: "us-east-1",
        bucket: env("AWS_BUCKET") as string ,
        params: {
          ACL: env("AWS_ACL", "public-read") as string,
          signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 15 * 60) as number,
          Bucket: env("AWS_BUCKET") as string ,
        },
	baseUrl:env("CDN_URL") as string
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});