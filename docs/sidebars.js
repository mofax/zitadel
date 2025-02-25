module.exports = {
  examples: [
    "examples/introduction",
    {
      type: "category",
      label: "Integrate ZITADEL Login in your App",
      items: [
        "examples/login/angular",
        "examples/login/react",
        "examples/login/flutter",
        "examples/login/nextjs",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Secure your API",
      items: [
        "examples/secure-api/go",
        "examples/secure-api/dot-net"],
      collapsed: false,
    },
    {
      type: "category",
      label: "Call the ZITADEL API",
      items: [
        "examples/call-zitadel-api/go",
        "examples/call-zitadel-api/dot-net",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Identity Aware Proxy",
      items: ["examples/identity-proxy/oauth2-proxy"],
      collapsed: false,
    },
  ],
  guides: [
    "guides/overview",
    {
      type: "category",
      label: "Get started",
      collapsed: false,
      items: [
        "guides/start/quickstart",
      ],
    },
    {
      type: "category",
      label: "Deploy",
      collapsed: false,
      items: [
        "guides/deploy/overview",
        "guides/deploy/linux",
        "guides/deploy/macos",
        "guides/deploy/compose",
        "guides/deploy/knative",
        "guides/deploy/kubernetes",
        "guides/deploy/loadbalancing-example/loadbalancing-example",
      ],
    },
    {
      type: "category",
      label: "Manage",
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Cloud',
          items: [
            "guides/manage/cloud/overview",
            "guides/manage/cloud/start",
            "guides/manage/cloud/instances",
            "guides/manage/cloud/billing",
            "guides/manage/cloud/users",
            "guides/manage/cloud/support",
          ]
        },
        {
          type: 'category',
          label: 'Self-Hosted',
          items: [
            "guides/manage/self-hosted/configure/configure",
            "guides/manage/self-hosted/proxy/proxy",
            "guides/manage/self-hosted/custom-domain",
            "guides/manage/self-hosted/http2",
            "guides/manage/self-hosted/tls_modes",
          ]
        },
        {
          type: 'category',
          label: 'Console',
          items: [
            "guides/manage/console/organizations",
            "guides/manage/console/projects",
            "guides/manage/console/applications",

          ]
        },
        {
          type: 'category',
          label: 'Customize',
          items: [
            "guides/manage/customize/branding",
            "guides/manage/customize/texts",
            "guides/manage/customize/behavior",
            "guides/manage/customize/user-metadata",
          ]
        }
      ],
    },
    {
      type: "category",
      label: "Integrate",
      collapsed: false,
      items: [
        "guides/integrate/identity-brokering",
        "guides/integrate/access-zitadel-apis",
        "guides/integrate/access-zitadel-system-api",
        "guides/integrate/authenticated-mongodb-charts",
        "guides/integrate/auth0",
        "guides/integrate/azuread",
        "guides/integrate/gitlab-self-hosted",
        "guides/integrate/login-users",
        "guides/integrate/serviceusers",
        "guides/integrate/oauth-recommended-flows",
        "guides/integrate/export-and-import"
      ],
    },
    {
      type: "category",
      label: "Solution Scenarios",
      collapsed: false,
      items: [
        "guides/solution-scenarios/introduction",
        "guides/solution-scenarios/b2c",
        "guides/solution-scenarios/b2b",
      ],
    },
    {
      type: "category",
      label: "Trainings",
      collapsed: true,
      items: [
        "guides/trainings/introduction",
        "guides/trainings/application",
        "guides/trainings/recurring",
        "guides/trainings/project",
      ],
    },
  ],
  apis: [
    "apis/introduction",
    {
      type: "category",
      label: "API Definition",
      collapsed: false,
      items: [
        "apis/statuscodes",
        {
          type: "category",
          label: "Proto",
          collapsed: true,
          items: [
            "apis/proto/auth",
            "apis/proto/management",
            "apis/proto/admin",
            "apis/proto/system",
            "apis/proto/instance",
            "apis/proto/org",
            "apis/proto/user",
            "apis/proto/app",
            "apis/proto/policy",
            "apis/proto/auth_n_key",
            "apis/proto/change",
            "apis/proto/idp",
            "apis/proto/member",
            "apis/proto/metadata",
            "apis/proto/message",
            "apis/proto/text",
            "apis/proto/action",
            "apis/proto/object",
            "apis/proto/options",
          ],
        },
        {
          type: "category",
          label: "Assets API",
          collapsed: true,
          items: ["apis/assets/assets"],
        },
          "apis/actions"
      ],
    },
    {
      type: "category",
      label: "OpenID Connect & OAuth",
      collapsed: false,
      items: [
        "apis/openidoauth/endpoints",
        "apis/openidoauth/scopes",
        "apis/openidoauth/claims",
        "apis/openidoauth/authn-methods",
        "apis/openidoauth/grant-types",
      ],
    },
    {
      type: "category",
      label: "Rate Limits",
      collapsed: false,
      items: [
        "apis/ratelimits/ratelimits",
        "legal/rate-limit-policy",
      ],
    },
  ],
  concepts: [
    "concepts/introduction",
    "concepts/principles",
    {
      type: "category",
      label: "Eventstore",
      collapsed: false,
      items: [
        "concepts/eventstore/overview",
        "concepts/eventstore/implementation",
      ],
    },
    {
      type: "category",
      label: "Architecture",
      collapsed: false,
      items: [
        "concepts/architecture/software",
        "concepts/architecture/solution",
        "concepts/architecture/secrets",
      ],
    },
    {
      type: "category",
      label: "Structure",
      collapsed: false,
      items: [
        "concepts/structure/overview",
        "concepts/structure/instance",
        "concepts/structure/organizations",
        "concepts/structure/policies",
        "concepts/structure/projects",
        "concepts/structure/applications",
        "concepts/structure/granted_projects",
        "concepts/structure/users",
        "concepts/structure/managers",
      ],
    },
    {
      type: "category",
      label: "Use Cases",
      collapsed: false,
      items: ["concepts/usecases/saas"],
    },
    {
      type: "category",
      label: "Features",
      collapsed: false,
      items: ["concepts/features/actions"],
    },
  ],
  manuals: [
    "manuals/introduction",
    "manuals/user-profile",
    "manuals/user-login",
    "manuals/troubleshooting",
  ],
  legal: [
    "legal/introduction",
    "legal/terms-of-service",
    "legal/data-processing-agreement",
    {
      type: "category",
      label: "Service Description",
      collapsed: false,
      items: ["legal/cloud-service-description", "legal/service-level-description", "legal/support-services"],
    },
    {
      type: "category",
      label: "Additional terms",
      collapsed: true,
      items: [
        "legal/terms-support-service",
        "legal/terms-of-service-dedicated",
      ],
    },
    {
      type: "category",
      label: "Policies",
      collapsed: false,
      items: [
        "legal/privacy-policy",
        "legal/acceptable-use-policy",
        "legal/rate-limit-policy",
      ],
    },
  ],
};
