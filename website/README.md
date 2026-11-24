# Clove OS website

This app contains the Clove OS landing page, model catalog, API documentation,
finance demo, and developer portal. The landing page pairs the owl mark and
watercolor artwork with a paper palette. See the [design system](DESIGN.md)
and [product brief](PRODUCT.md) for details.

## Deployment target

| Setting | Value |
| --- | --- |
| Vercel team | `aniiiixds-projects` |
| Vercel project | `clove-landing` |
| Project ID | `prj_lZWCPdytkjBHPUghppxsGnh9R944` |
| GitHub repository | [aniiiiXD/cloveOs-ltd](https://github.com/aniiiiXD/cloveOs-ltd) |
| Production branch | `main` |
| Root directory | `website` |
| Canonical URL | `https://www.cloveos.com` |

Link the repository root to `clove-landing` for landing-page deployments and
verify the selected project before each deployment. The product API, portal,
and model catalog use the separate `sova-native` project.

## Contact and product services

The contact form uses `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and optional
`CONTACT_FROM_EMAIL`. It also accepts the existing project's
`NOTIFICATION_EMAIL` as the recipient when `CONTACT_TO_EMAIL` is absent.
Set `NEXT_PUBLIC_CONTACT_EMAIL` to display a public email address.

The [inference API guide](docs/inference.md) documents the
`sova-native.vercel.app` service URL, catalog IDs, and key format. The
`sova-native` project supplies the portal's database, authentication, and AWS
configuration.

## Compute policy

Builds and deployments run on Vercel. Each run requires explicit approval after
showing its exact command, machine, estimated duration and cost, and output.
Local builds or smoke tests also require approval before running. This landing
change requires no model training, GPU instance, or dedicated serving resources.
Tear down any temporary compute allocated for an approved run when it finishes.
