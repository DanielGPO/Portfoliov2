import { useState, createContext, useContext } from "react"

export const LangContext = createContext()

export function LanguageContext({children}) {
    const [language, setlanguage] = useState()

  function lang() {
    setlanguage(!language)
  }

  return (
      <LangContext.Provider value={{lang, language}}>
          {children}
    </LangContext.Provider>
  )
}
export function UserLanguage() {
    return useContext(LangContext)
}