let saveBtn = document.getElementById("btn-submit")

let sizeInput = document.getElementById("input-page-size")
let categoryInput = document.getElementById("input-category")

function saveSetting() {
    const data = {
        size: sizeInput.value,
        category: categoryInput.value
    }
    if (validateSetting(data)) {
        saveToStorage("PageSize", data.size)
        saveToStorage("Category", data.category)
    }
}


function validateSetting(setting) {
    if (setting.size < 1 || setting.size > 100) {
        alert("Number page size must be between 1 and 100!")
        return false
    }
    return true
}
saveBtn.addEventListener("click", saveSetting)