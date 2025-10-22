// get
export const loadInstall = () => {
  try {
    const data = localStorage.getItem('install')
    return data ? JSON.parse(data) : []
  } catch (err) {
    console.log(err)
    return []
  }
}

// save
export const updateList = installedApp => {
  const install = loadInstall()
  
  try {
    const isDuplicate = install.some(p => p.id === installedApp.id)
    if (isDuplicate) return alert('Already Installed this App')
    const updatedApps = [...install, installedApp]
    localStorage.setItem('install', JSON.stringify(updatedApps))
    alert('App Installed Successfully')
  } catch (err) {
    console.log(err)
  }
}

// delete
export const uninstall = id => {
  const install = loadInstall()
  try {
    const updatedApps = install.filter(p => p.id !== id)
    localStorage.setItem('install', JSON.stringify(updatedApps))
  } catch (err) {
    console.log(err)
  }
}