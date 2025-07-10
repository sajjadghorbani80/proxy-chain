import { Server } from 'proxy-chain';

// دریافت تنظیمات از متغیرهای محیطی
const PORT = process.env.PORT || 8000;
const USERNAME = process.env.USERNAME || 'user';
const PASSWORD = process.env.PASSWORD || 'pass';

if (!process.env.USERNAME || !process.env.PASSWORD) {
    console.error('ERROR: لطفاً USERNAME و PASSWORD را در env تنظیم کنید.');
    process.exit(1);
}

const server = new Server({
    port: parseInt(PORT, 10),
    // اعتبارسنجی ورودی
    authenticate: ({ username, password }) => {
        return (username === USERNAME && password === PASSWORD);
    },
    // در این مثال هیچ upstream proxy ای نداریم؛
    // اگر خواستید می‌توانید اینجا اضافه کنید.
});

server.listen(() => {
    console.log(`🚀 proxy-chain listening on port ${PORT}`);
    console.log(`   username: ${USERNAME}`);
});
