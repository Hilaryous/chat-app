import * as utils from '../utils'

describe('utils', () => {
  const users = {
    '-LQMdUOXZ1tbEsQjAaHb': { email: 'fido.dog@test.com', id: '-LQMdUOXZ1tbEsQjAaHb', uid: 'lwmzuCld8JPsA66TyBbBj7nblg32' },
    '-LQMdnVBEG2-MwCVGkCZ': { email: 'bella.dog@test.com', id: '-LQMdnVBEG2-MwCVGkCZ', uid: 'c7TO3s555ZV2swy58SaZeqxWVN52' },
    '-LQMdxCUEnm5PNXsQ4ol': { email: 'milo.dog@test.com', id: '-LQMdxCUEnm5PNXsQ4ol', uid: 'W7ONii4LXrWj1cluQsAKiODqojk2' },
    '-LQMe0En9DyOy6fXIzX6': { email: 'bailey.dog@test.com', id: '-LQMe0En9DyOy6fXIzX6', uid: 'lhzAJS1S8UQOQXaYCkaby8WlDKe2' },
    '-LQMe4NzrALTC3dYkVlp': { email: 'daisy.dog@test.com', id: '-LQMe4NzrALTC3dYkVlp', uid: '7V0vEIwMf8UZ5GP8qIppCcHQWVl2' },
    '-LQMe8d81W3gt1a_TOeY': { email: 'sadie.dog@test.com', id: '-LQMe8d81W3gt1a_TOeY', uid: '0aU6etmgpoP36yu184rJXrKMTCF3' },
  }
  it('gets UserId', () => {
    const currentUserId = 'lwmzuCld8JPsA66TyBbBj7nblg32'
    expect(utils.getUserId(currentUserId, users)).toEqual('-LQMdUOXZ1tbEsQjAaHb')
  })

  it('gets Chats', () => {
    const currentUserId = '-LQMdUOXZ1tbEsQjAaHb'
    const chats = {
      '-LQMiWqCNvtMjZuAmmzk': { fromUser: '-LQMdUOXZ1tbEsQjAaHb', id: '-LQMiWqCNvtMjZuAmmzk', toUser: '-LQMe0En9DyOy6fXIzX6' },
      '-LQMi_fmSYWs-7mWDCao': { fromUser: '-LQMdUOXZ1tbEsQjAaHb', id: '-LQMi_fmSYWs-7mWDCao', toUser: '-LQMdxCUEnm5PNXsQ4ol' },
      '-LQMixmBdtai8Ky87edi': { fromUser: '-LQMdUOXZ1tbEsQjAaHb', id: '-LQMixmBdtai8Ky87edi', toUser: '-LQMdnVBEG2-MwCVGkCZ' },
      '-LQMjDZJfBZi4kGH1ZSA': { fromUser: '-LQMdUOXZ1tbEsQjAaHb', id: '-LQMjDZJfBZi4kGH1ZSA', toUser: '-LQMe4NzrALTC3dYkVlp' },
      '-LQMjZE_wVE8uZYH0NNh': { fromUser: '-LQMdUOXZ1tbEsQjAaHb', id: '-LQMjZE_wVE8uZYH0NNh', toUser: '-LQMe8d81W3gt1a_TOeY' } }
    const results = [
      { fromUser: '-LQMdUOXZ1tbEsQjAaHb', id: '-LQMiWqCNvtMjZuAmmzk', toUser: '-LQMe0En9DyOy6fXIzX6', userEmail: 'bailey.dog@test.com' },
      { fromUser: '-LQMdUOXZ1tbEsQjAaHb', id: '-LQMi_fmSYWs-7mWDCao', toUser: '-LQMdxCUEnm5PNXsQ4ol', userEmail: 'milo.dog@test.com' },
      { fromUser: '-LQMdUOXZ1tbEsQjAaHb', id: '-LQMixmBdtai8Ky87edi', toUser: '-LQMdnVBEG2-MwCVGkCZ', userEmail: 'bella.dog@test.com' },
      { fromUser: '-LQMdUOXZ1tbEsQjAaHb', id: '-LQMjDZJfBZi4kGH1ZSA', toUser: '-LQMe4NzrALTC3dYkVlp', userEmail: 'daisy.dog@test.com' },
      { fromUser: '-LQMdUOXZ1tbEsQjAaHb', id: '-LQMjZE_wVE8uZYH0NNh', toUser: '-LQMe8d81W3gt1a_TOeY', userEmail: 'sadie.dog@test.com' },
    ]
    expect(utils.getChats(currentUserId, users, chats)).toEqual(results)
  })

  it('gets Messages', () => {
    const currentChatId = '-LQMiWqCNvtMjZuAmmzk'
    const messages = [
      { chatId: '-LQMiWqCNvtMjZuAmmzk', content: 'hi', id: '-LQMtcYKJuJKPUIsQKyX', userId: '-LQMdUOXZ1tbEsQjAaHb' },
      { chatId: '-LQMi_fmSYWs-7mWDCao', content: 'hi', id: '-LQWt7O1pXHW1MKAZe1u', userId: '-LQMdUOXZ1tbEsQjAaHb' },
      { chatId: '-LQMixmBdtai8Ky87edi', content: 'heyo', id: '-LQWt8UVW5yplHEfMswN', userId: '-LQMdUOXZ1tbEsQjAaHb' },
      { chatId: '-LQMjDZJfBZi4kGH1ZSA', content: 'sup', id: '-LQWt9MWIA0g4xEboI8T', userId: '-LQMdUOXZ1tbEsQjAaHb' },
      { chatId: '-LQMjZE_wVE8uZYH0NNh', content: "what's up?", id: '-LQWtATbqzmu6HNeLzpZ', userId: '-LQMdUOXZ1tbEsQjAaHb' },
    ]
    const results = [
      { chatId: '-LQMiWqCNvtMjZuAmmzk', content: 'hi', id: '-LQMtcYKJuJKPUIsQKyX', userId: '-LQMdUOXZ1tbEsQjAaHb', userEmail: 'fido.dog@test.com' },
    ]
    expect(utils.getMessages(currentChatId, users, messages)).toEqual(results)
  })
})
