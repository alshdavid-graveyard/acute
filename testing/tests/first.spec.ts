import * as compiler  from '@acuteui/compiler'
import * as core  from '@acuteui/core'
import * as platform  from '@acuteui/platform'

it('Should run', () => {
  expect(compiler.foo).toBeTruthy()
  expect(core.foo).toBeTruthy()
  expect(platform.foo).toBeTruthy()
})