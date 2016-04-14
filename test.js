import test from 'ava'
import {ooxx, boring} from './'

test('ooxx', async t => {
  const ret = await ooxx()
  t.is(ret.status, 'ok')
  t.is(ret.current_page, 1)
})

test('boring', async t => {
  const ret = await boring({page: 2})
  t.is(ret.status, 'ok')
  t.is(ret.current_page, 2)
})
