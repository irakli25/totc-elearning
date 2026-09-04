# Figma exports still needed

The Figma MCP connection ran out of tool calls partway through this build (the
Starter plan allows 20 per month). Everything below is what I could not pull
myself. Nothing in the code changes when these land — each file simply replaces
a generated placeholder at the same path.

Source file: https://www.figma.com/design/lElMe5N8yxWj4cqdLcssJO/E-Learning-Site--Community-

## 1. Reference frames — do these first

These are not shipped with the site. I read them to match colours, type and the
content hidden inside Figma component instances, such as the pricing plans and
course cards.

In Figma: click the frame in the layers panel, then in the right sidebar under
**Export** choose **PNG**, scale **1x**, and click Export.

| Node | Frame | Route it becomes | Save as |
| --- | --- | --- | --- |
| `10:358` | Landing | / | `docs/reference/10-358.png` |
| `28:131` | Login | /login | `docs/reference/28-131.png` |
| `28:172` | Register | /register | `docs/reference/28-172.png` |
| `47:247` | Course | /courses | `docs/reference/47-247.png` |
| `46:217` | Course Detail | /courses/[slug] | `docs/reference/46-217.png` |
| `42:319` | MemberShip page | /membership | `docs/reference/42-319.png` |
| `34:89` | Blog page | /blog | `docs/reference/34-89.png` |
| `30:64` | Blog detail | /blog/[slug] | `docs/reference/30-64.png` |

## 2. Images the site loads

Same steps, but set scale to **2x**. The pixel sizes below are what 2x should
produce, so they double as a check that the right node is selected.

| Node | What it is | Save as | Size at 2x |
| --- | --- | --- | --- |
| `10:478` | Our Features / block 1 illustration | `public/images/features/podium-view.png` | 1566 x 966 |
| `10:578` | Our Features / block 2 illustration | `public/images/features/teaching-tools.png` | 1274 x 1222 |
| `10:672` | Our Features / block 3 illustration | `public/images/features/assessments.png` | 1234 x 1302 |
| `10:712` | Our Features / block 4 illustration | `public/images/features/gradebook.png` | 1616 x 1120 |
| `10:767` | Our Features / block 5 illustration | `public/images/features/one-on-one.png` | 1510 x 998 |
| `10:424` | Testimonials / portrait | `public/images/home/testimonial-gloria.png` | 1120 x 1400 |
| `10:386` | Latest News / featured card image | `public/images/home/news-featured.png` | 1280 x 680 |
| `10:396` | Latest News / list thumbnail 1 | `public/images/home/news-1.png` | 560 x 400 |
| `10:404` | Latest News / list thumbnail 2 | `public/images/home/news-2.png` | 560 x 400 |
| `10:413` | Latest News / list thumbnail 3 | `public/images/home/news-3.png` | 560 x 400 |
| `28:132` | Login / photo panel | `public/images/auth/login-panel.png` | 1474 x 1650 |
| `28:173` | Register / photo panel | `public/images/auth/register-panel.png` | 1462 x 1650 |
| `54:434` | Course card thumbnail 1 (from the Recommended row) | `public/images/courses/course-1.png` | 748 x 520 |
| `54:434` | Course card thumbnail 2 (from the Recommended row) | `public/images/courses/course-2.png` | 748 x 520 |
| `54:434` | Course card thumbnail 3 (from the Recommended row) | `public/images/courses/course-3.png` | 748 x 520 |
| `54:434` | Course card thumbnail 4 (from the Recommended row) | `public/images/courses/course-4.png` | 748 x 520 |
| `47:348` | Continue-learning card image 1 | `public/images/courses/lesson-1.png` | 868 x 520 |
| `47:348` | Continue-learning card image 2 | `public/images/courses/lesson-2.png` | 868 x 520 |
| `47:348` | Continue-learning card image 3 | `public/images/courses/lesson-3.png` | 868 x 520 |
| `30:88` | Blog page / hero banner | `public/images/blog/hero.png` | 3840 x 1304 |
| `30:88` | Blog detail / article hero | `public/images/blog/post-hero.png` | 3840 x 1304 |
| `37:113` | Related Blog card image 1 | `public/images/blog/post-1.png` | 1370 x 764 |
| `37:113` | Related Blog card image 2 | `public/images/blog/post-2.png` | 1370 x 764 |
| `37:113` | Related Blog card image 3 | `public/images/blog/post-3.png` | 1370 x 764 |
| `37:113` | Related Blog card image 4 | `public/images/blog/post-4.png` | 1370 x 764 |
| `37:76` | Blog category card / UX-UI | `public/images/blog/cat-ux.png` | 712 x 654 |
| `37:77` | Blog category card / React | `public/images/blog/cat-react.png` | 712 x 654 |
| `37:87` | Blog category card / PHP | `public/images/blog/cat-php.png` | 712 x 654 |
| `37:97` | Blog category card / JavaScript | `public/images/blog/cat-js.png` | 712 x 654 |
| `54:225` | Membership / Become a Teacher panel | `public/images/membership/teacher.png` | 1572 x 1524 |
| `54:257` | Membership / Become a Coursector panel | `public/images/membership/coursector.png` | 1572 x 1524 |
| `135:340` | Course Detail / hero media | `public/images/courses/detail-hero.png` | 2400 x 1350 |

## How to select a node by ID

Open the file, press `Ctrl+\` to focus the layers panel, or paste this into
the browser address bar, replacing NODE with the id and swapping `:` for `-`:

```
https://www.figma.com/design/lElMe5N8yxWj4cqdLcssJO/E-Learning-Site--Community-?node-id=NODE
```

For example `?node-id=10-478` selects the first Our Features illustration.

## After you drop the files in

```bash
node scripts/make-placeholders.mjs --list   # shows anything still missing
npm run dev
```
