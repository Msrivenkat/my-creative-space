<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep all fictional portfolio content and asset references in src/data/portfolio.ts so personalization does not require rewriting presentation components.
- Render shared navigation, footer, theme and notifications around the root Outlet; expose reusable sections both on the scrolling home and dedicated content routes for deep links and page metadata.
- Contact is an explicitly labeled frontend-only demonstration until message delivery is requested; never claim a sample submission was sent.
- Use generated local images and browser-safe HTML interface previews for project imagery so the sample portfolio has no external media dependency.
