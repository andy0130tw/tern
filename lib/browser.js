import * as _tern from './tern'
import * as infer from './infer'
import * as comment from './comment'
import * as def from './def'
import * as signal from './signal'

export const tern = {
  ..._tern,
  ...infer,
  comment,
  def,
  signal,
}

import * as _acorn from 'acorn'
import * as acorn_loose from 'acorn-loose'
import * as acorn_walk from 'acorn-walk'

export const acorn = {
  ..._acorn,
  loose: acorn_loose,
  walk: acorn_walk,
}
