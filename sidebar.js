document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.querySelector(".sidebar-toggle");

    if (!sidebar || !toggleBtn) {
        console.error("❌ 錯誤：找不到 `.sidebar` 或 `.sidebar-toggle`，請檢查 HTML 結構！");
        return;
    }

    toggleBtn.addEventListener("click", function () {
        sidebar.classList.toggle("collapsed");

        // 更新按鈕文字
        if (sidebar.classList.contains("collapsed")) {
            toggleBtn.textContent = "展開";
        } else {
            toggleBtn.textContent = "收合";
        }
    });

    console.log("✅ 側邊欄功能已綁定，等待用戶點擊按鈕...");
});