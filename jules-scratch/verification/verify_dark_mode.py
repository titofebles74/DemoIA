import asyncio
from playwright.async_api import async_playwright, expect

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        try:
            # Navigate to the home page.
            await page.goto("http://localhost:5000", timeout=60000)

            # Take a screenshot of the initial (light) mode.
            await page.screenshot(path="jules-scratch/verification/light-mode.png")

            # Click the dark mode toggle button.
            dark_mode_button = page.locator("#darkModeToggle")
            await dark_mode_button.click()

            # Wait for the body to have the dark-mode class.
            body = page.locator("body")
            await expect(body).to_have_class("dark-mode")

            # Take a screenshot of the dark mode.
            await page.screenshot(path="jules-scratch/verification/verification.png")

        except Exception as e:
            print(f"An error occurred: {e}")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
