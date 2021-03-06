// force the state to clear with fast refresh in Expo
// @refresh reset

import React, { useEffect, createContext, useState } from 'react'
import { database } from '../database/database'

export const MemoriesContext = createContext({})

export const MemoriesContextProvider = (props) => {
  // Initial values are obtained from the props
  const { memories: initialMemories, children } = props

  // Use State to store the values
  const [positiveMemories, setPositiveMemories] = useState(initialMemories)
  const [negativeMemories, setNegativeMemories] = useState(initialMemories)

  useEffect(() => {
    refreshMemories()
  }, [])

  const addNewMemory = (memory, isPositive) => {
    const refreshMemories = !!isPositive
      ? refreshPositiveMemories
      : refreshNegativeMemories
    console.log('isPositive : ', isPositive)
    return database.insertMemory(memory, isPositive, refreshMemories)
  }

  const updateMemory = (memory, id) => {
    return database.updateMemory(memory, id, refreshMemories)
  }

  const deleteMemory = (id) => {
    return database.deleteMemory(id, refreshMemories)
  }

  const refreshPositiveMemories = () => {
    return database.getPositiveMemories(setPositiveMemories)
  }

  const refreshNegativeMemories = () => {
    return database.getNegativeMemories(setNegativeMemories)
  }

  const refreshMemories = () => {
    refreshNegativeMemories()
    refreshPositiveMemories()
  }

  // Make the context object:
  const memoryContext = {
    positiveMemories,
    negativeMemories,
    addNewMemory,
    updateMemory,
    deleteMemory,
  }

  // pass the value in provider and return
  return (
    <MemoriesContext.Provider value={memoryContext}>
      {children}
    </MemoriesContext.Provider>
  )
}
