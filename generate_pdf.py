import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        print("Navigating to http://localhost:5173/#/sempozyum-programi")
        await page.goto('http://localhost:5173/#/sempozyum-programi', wait_until='networkidle')
        await page.wait_for_timeout(3000) # give time for fonts/layout to settle
        
        # Hide unneeded things for print
        await page.evaluate('''() => {
            const nav = document.querySelector('nav');
            if (nav) nav.style.display = 'none';
            const footer = document.querySelector('footer');
            if (footer) footer.style.display = 'none';
            const tabs = document.querySelector('.flex.flex-wrap.justify-center.gap-2.mb-8');
            if (tabs) tabs.style.display = 'none';
            
            // Adjust the root background
            const pageDiv = document.querySelector('.min-h-screen');
            if (pageDiv) pageDiv.className = pageDiv.className.replace('min-h-screen', '');
        }''')
        
        pdf_path = '/Users/aliozkan/Desktop/Sempozyum_Programi.pdf'
        print(f"Saving PDF to {pdf_path}")
        await page.pdf(
            path=pdf_path,
            format='A4',
            print_background=True,
            margin={'top': '20px', 'bottom': '20px', 'left': '20px', 'right': '20px'}
        )
        await browser.close()
        print("Done!")

if __name__ == '__main__':
    asyncio.run(main())
