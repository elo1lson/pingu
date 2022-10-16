'use strict'

export const contentGet = ('/', (req, res) => {
  let langs = ['pt-BR', 'en-US']
  let param = req.query
  console.log(param, langs.includes(param));

  if (!param)
    return res.status(400).json({
      message: 'lang is not provided'
    })
  return res.status(200).json({
    message: 'ok'
  })
})
