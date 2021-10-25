import React from 'react'

import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('db.db')

const getMemories = (setUserFunc) => {
  db.transaction(
    (tx) => {
      tx.executeSql('select * from memories', [], (_, { rows: { _array } }) => {
        setUserFunc(_array)
      })
    },
    (t, error) => {
      console.log('db error load memories')
      console.log(error)
    },
    (_t, _success) => {
      console.log('loaded memories')
    }
  )
}

const getPositiveMemories = (setUserFunc) => {
  db.transaction(
    (tx) => {
      tx.executeSql(
        'select * from memories where isPositive = 1',
        [],
        (_, { rows: { _array } }) => {
          setUserFunc(_array)
        }
      )
    },
    (t, error) => {
      console.log('db error load positive memories')
      console.log(error)
    },
    (_t, _success) => {
      console.log('loaded positive memories')
    }
  )
}

const getNegativeMemories = (setUserFunc) => {
  db.transaction(
    (tx) => {
      tx.executeSql(
        'select * from memories where isPositive = 0',
        [],
        (_, { rows: { _array } }) => {
          setUserFunc(_array)
        }
      )
    },
    (t, error) => {
      console.log('db error load negative memories')
      console.log(error)
    },
    (_t, _success) => {
      console.log('loaded negative memories')
    }
  )
}

const insertMemory = (memory, isPositive, successFunc) => {
  db.transaction(
    (tx) => {
      tx.executeSql('insert into memories (memory, isPositive) values (?, ?)', [
        memory,
        isPositive,
      ])
    },
    (t, error) => {
      console.log('db error insertMemory')
      console.log(error)
    },
    (t, success) => {
      successFunc()
    }
  )
}

const updateMemory = (memory, id, successFunc) => {
  db.transaction(
    (tx) => {
      tx.executeSql('update memories SET memory = (?) where id = (?)', [
        memory,
        id,
      ])
    },
    (t, error) => {
      console.log('db error updateMemory')
      console.log(error)
    },
    (t, success) => {
      successFunc()
    }
  )
}

const dropDatabaseTablesAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'drop table if exists memories',
        [],
        (_, result) => {
          resolve(result)
        },
        (_, error) => {
          console.log('error dropping memories table')
          reject(error)
        }
      )
    })
  })
}

const setupDatabaseAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'create table if not exists memories (id integer primary key not null, memory text, isPositive integer);'
        )
      },
      (_, error) => {
        console.log('db error creating tables')
        console.log(error)
        reject(error)
      },
      (_, success) => {
        resolve(success)
      }
    )
  })
}

export const database = {
  getPositiveMemories,
  getNegativeMemories,
  insertMemory,
  updateMemory,
  setupDatabaseAsync,
  dropDatabaseTablesAsync,
}
