# Help Template

قالب پایه برای ساخت سایت‌های Help و Documentation با استفاده از Next.js و Nextra.

## هدف پروژه

این پروژه به‌عنوان Template پایه برای ساخت مستندات نرم‌افزارها استفاده می‌شود.

با استفاده از این Template می‌توان برای هر نرم‌افزار یک سایت Help مستقل با ظاهر و ساختار یکسان ایجاد کرد و فقط محتوای مربوط به همان نرم‌افزار را تغییر داد.

## Tech Stack

- Next.js 13.5.6
- React 18
- TypeScript
- Nextra 2.13.4
- Nextra Theme Docs 2.13.4
- Tailwind CSS 3
- Swagger UI React
- Lucide React
- Scalar API Reference

## Features

- پشتیبانی از زبان فارسی و RTL
- Sidebar و Navigation
- جستجوی داخلی
- Markdown و MDX
- React Components داخل صفحات MDX
- Callout
- Cards
- Steps
- Table سفارشی
- نمایش مستندات Swagger/OpenAPI
- پشتیبانی از API Documentation
- پشتیبانی از فونت محلی
- طراحی Responsive
- امکان شخصی‌سازی Logo و Theme
- امکان اتصال به GitHub برای ویرایش صفحات

## Project Structure

    help-template/
    ├── components/
    │   ├── logo.tsx
    │   ├── table/
    │   │   ├── index.tsx
    │   │   └── style.module.css
    │   └── swagger/
    │       ├── index.tsx
    │       └── swagger-dark.css
    │
    ├── pages/
    │   ├── _app.tsx
    │   ├── _document.tsx
    │   ├── _meta.json
    │   └── ...
    │
    ├── public/
    │   ├── fonts/
    │   └── ...
    │
    ├── globals.css
    ├── next.config.js
    ├── tailwind.config.js
    ├── theme.config.tsx
    ├── package.json
    ├── tsconfig.json
    └── Dockerfile

## Important Files

### `pages/`

صفحات Documentation در این پوشه قرار می‌گیرند.

فایل‌های `.mdx` برای ساخت صفحات Help استفاده می‌شوند.

### `_meta.json`

برای تعیین عنوان، ترتیب صفحات و ساختار Sidebar استفاده می‌شود.

### `theme.config.tsx`

تنظیمات اصلی Nextra Theme در این فایل قرار دارد؛ از جمله:

- Logo
- RTL
- Sidebar
- Search
- Table of Contents
- GitHub Repository
- Edit Page
- SEO
- Theme

### `components/`

Componentهای سفارشی پروژه در این پوشه قرار می‌گیرند.

### `public/`

تصاویر، فونت‌ها و سایر فایل‌های عمومی پروژه در این پوشه قرار می‌گیرند.

### `globals.css`

استایل‌های عمومی و سفارشی پروژه در این فایل قرار می‌گیرند.

### `next.config.js`

تنظیمات Next.js و اتصال Nextra به Next.js در این فایل انجام می‌شود.

## Local Development

ابتدا Repository را Clone کنید:

    git clone <repository-url>

وارد پروژه شوید:

    cd help-template

سپس Dependencyها را نصب کنید:

    npm install

برای اجرای نسخه Development:

    npm run dev

سپس پروژه را در آدرس زیر باز کنید:

    http://localhost:3000

## Production

برای ساخت نسخه Production:

    npm run build

برای اجرای نسخه Production:

    npm run start

## Creating a New Help

برای ساخت Help جدید، ابتدا این Template را Clone کنید:

    git clone <repository-url> new-help

سپس وارد پروژه شوید:

    cd new-help

بعد Dependencyها را نصب کنید:

    npm install

سپس موارد زیر را مطابق نرم‌افزار جدید تغییر دهید:

- محتوای `pages/`
- `pages/_meta.json`
- `theme.config.tsx`
- `components/logo.tsx`
- Logo
- Favicon
- تصاویر و فایل‌های داخل `public/`
- رنگ‌ها و استایل‌های اختصاصی
- عنوان سایت و SEO
- لینک GitHub Repository

## Creating Pages

برای ساخت یک صفحه جدید، یک فایل `.mdx` در `pages` ایجاد کنید.

مثال:

    pages/
    └── users.mdx

محتوای نمونه:

    ---
    title: کاربران
    ---

    # کاربران

    در این بخش نحوه مدیریت کاربران توضیح داده می‌شود.

## Creating Sections

برای ساخت یک بخش چندصفحه‌ای، یک پوشه ایجاد کنید.

مثال:

    pages/
    └── users/
        ├── index.mdx
        ├── create.mdx
        ├── edit.mdx
        └── _meta.json

در این حالت مسیرهای زیر ایجاد می‌شوند:

    /users
    /users/create
    /users/edit

## Using Cards

نمونه استفاده از Cards:

    import { Cards, Card } from "nextra/components";

    <Cards>
      <Card title="ایجاد کاربر" href="/users/create">
        ساخت یک کاربر جدید
      </Card>

      <Card title="ویرایش کاربر" href="/users/edit">
        ویرایش یک کاربر موجود
      </Card>
    </Cards>

## Using Callout

نمونه استفاده از Callout:

    import { Callout } from "nextra/components";

    <Callout type="info">
      این یک پیام اطلاع‌رسانی است.
    </Callout>

انواع رایج:

    info
    warning
    error
    default

## Using Steps

نمونه استفاده از Steps:

    import { Steps } from "nextra/components";

    <Steps>

    ### مرحله اول

    وارد سیستم شوید.

    ### مرحله دوم

    بخش موردنظر را انتخاب کنید.

    ### مرحله سوم

    اطلاعات را تکمیل کنید.

    </Steps>

## Using Swagger

برای نمایش مستندات Swagger/OpenAPI می‌توان از Component آماده Swagger استفاده کرد:

    import SwaggerWrapper from "components/swagger";

    # مستندات API

    <SwaggerWrapper url="https://example.com/openapi.json" />

## Git Workflow

برای مشاهده وضعیت پروژه:

    git status

برای دریافت آخرین تغییرات:

    git pull

برای اضافه کردن تغییرات:

    git add .

برای ثبت تغییرات:

    git commit -m "توضیح تغییر"

برای ارسال تغییرات به GitHub:

    git push

## Branches

برای ایجاد Branch جدید:

    git switch -c feature-name

برای مشاهده Branch فعلی:

    git branch

برای تغییر Branch:

    git switch branch-name

## Updating the Template

در صورت ایجاد تغییرات عمومی در Template، تغییرات باید در Repository اصلی Template ثبت شوند تا Helpهای جدید بتوانند از نسخه به‌روز Template استفاده کنند.

## License

MIT