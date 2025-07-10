# استفاده از تصویر رسمی Node.js
FROM node:18-alpine

# پوشه‌ی کاری در کانتینر
WORKDIR /app

# کپی package.json و نصب وابستگی‌ها
COPY package.json ./
RUN npm install --production

# کپی بقیه فایل‌ها
COPY index.js ./

# expose کردن پورت
EXPOSE 8000

# دستور پیش‌فرض برای اجرا
CMD ["npm", "start"]
