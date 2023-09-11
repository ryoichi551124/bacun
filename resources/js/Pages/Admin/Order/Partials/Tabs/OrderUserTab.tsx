/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { forms } from '@/Styles'
import { usePage } from '@inertiajs/react'
import { useEffect, useState } from 'react'
import searchUsers from '@/Services/users/searchUsers'
import SearchUsers from '@/Pages/Admin/Order/Partials/Tabs/SearchUsers'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import createOrderUserSchema, {
  CreateOrderUserSchemaType,
} from '@/Schemas/Admin/Order/createOrderUserSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { userDataToOrderUser } from '@/Services/orders/orderService'
import type { SearchUsersSchemaType } from '@/Schemas/Admin/User/searchUsersSchema'
import type { User, Pref, UserStatus } from '@/Types'

const lead = css`
  padding: 1.5rem 0 0 1.5rem;
  font-weight: bold;
`
const mt = css`
  margin-top: 0.5rem;
  margin-bottom: 0;
`

type OrderData = {
  prefs: Pref
  statuses: UserStatus
}
type OrderUserTabProps = {
  user: User | undefined
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>
  orderUser: CreateOrderUserSchemaType | undefined
  setOrderUser: React.Dispatch<
    React.SetStateAction<CreateOrderUserSchemaType | undefined>
  >
}

/**
 * 注文者情報の設定
 */
export default function OrderUserTab({
  user,
  setUser,
  orderUser,
  setOrderUser,
}: OrderUserTabProps) {
  const { prefs, statuses } = usePage<OrderData>().props
  const [users, setUsers] = useState<User[] | undefined>(undefined)

  // 顧客が検索済みであれば、選択した顧客を設定
  useEffect(() => {
    user && setUsers([user])
  }, [])

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreateOrderUserSchemaType>({
    defaultValues: orderUser,
    reValidateMode: 'onBlur',
    resolver: zodResolver(createOrderUserSchema),
  })

  /** 顧客検索 */
  const handleSearchUser = (data: SearchUsersSchemaType) => {
    searchUsers(data).then((res) => {
      if (res) {
        setUsers(res)
        setUser(res[0])
      } else {
        setUsers([])
        setUser(undefined)
      }
    })
  }

  /** 登録する顧客を選択 */
  const handleSelectUser = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.target.value &&
      setUser(
        users?.filter((user) => user.id === Number(event.target.value))[0],
      )
  }

  /** 選択した顧客のデータをフォームにコピーする */
  const handleUserCopy = () => {
    if (user) {
      for (const [key, value] of Object.entries(userDataToOrderUser(user))) {
        setValue(key as keyof CreateOrderUserSchemaType, value)
      }
    }
  }

  /** 受注者の保存 */
  const createOrderUser = (data: CreateOrderUserSchemaType) => {
    setOrderUser(data)
  }

  return (
    <>
      <div css={lead}>登録済みの顧客を検索</div>
      {/* 検索フォーム */}
      <SearchUsers onSearchUser={handleSearchUser} users={users} />
      {/* 検索結果から注文者を選ぶ */}
      {users && users.length > 0 && (
        <>
          <hr />
          <Grid container spacing={2} css={[forms.container, mt]}>
            <Grid xs={6}>
              <label htmlFor="users" css={forms.label}>
                登録する顧客を選ぶ
              </label>
              <select
                defaultValue={users[0].id}
                onChange={handleSelectUser}
                css={forms.input}
              >
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.last_name} {user.first_name} {user.email}
                  </option>
                ))}
              </select>
            </Grid>
            <Grid xs={6}></Grid>
            {/* ボタン */}
            <Grid xs={6} css={forms.buttonWrap}>
              <Button
                type="button"
                variant="contained"
                onClick={handleUserCopy}
              >
                顧客情報をコピーする
              </Button>
            </Grid>
          </Grid>
        </>
      )}
      <hr />

      {/* 注文者情報入力フォーム */}
      <form onSubmit={handleSubmit(createOrderUser)} css={forms.container}>
        <Grid container spacing={2}>
          {/* 名前（漢字） */}
          <Grid xs={4}>
            <label htmlFor="last_name" css={forms.label}>
              名前（姓）
            </label>
            <input
              id="last_name"
              placeholder="名前（姓）"
              css={[forms.input, errors.last_name && forms.error]}
              {...register('last_name')}
            />
            {errors.last_name && (
              <div css={forms.errText}>{errors.last_name.message}</div>
            )}
          </Grid>
          <Grid xs={4}>
            <label htmlFor="first_name" css={forms.label}>
              名前（名）
            </label>
            <input
              id="first_name"
              placeholder="名前（名）"
              css={[forms.input, errors.first_name && forms.error]}
              {...register('first_name')}
            />
            {errors.first_name && (
              <div css={forms.errText}>{errors.first_name.message}</div>
            )}
          </Grid>
          <Grid xs={4}></Grid>
          {/* 名前（カナ） */}
          <Grid xs={4}>
            <label htmlFor="last_kana" css={forms.label}>
              名前（セイ）
            </label>
            <input
              id="last_kana"
              placeholder="名前（セイ）"
              css={[forms.input, errors.last_kana && forms.error]}
              {...register('last_kana')}
            />
            {errors.last_kana && (
              <div css={forms.errText}>{errors.last_kana.message}</div>
            )}
          </Grid>
          <Grid xs={4}>
            <label htmlFor="first_kana" css={forms.label}>
              名前（メイ）
            </label>
            <input
              id="first_kana"
              placeholder="名前（メイ）"
              css={[forms.input, errors.first_kana && forms.error]}
              {...register('first_kana')}
            />
            {errors.first_kana && (
              <div css={forms.errText}>{errors.first_kana.message}</div>
            )}
          </Grid>
          <Grid xs={4}></Grid>
          {/* メール */}
          <Grid xs={6}>
            <label htmlFor="email" css={forms.label}>
              メール
            </label>
            <input
              id="email"
              placeholder="メールアドレス"
              css={[forms.input, errors.email && forms.error]}
              {...register('email')}
            />
            {errors.email && (
              <div css={forms.errText}>{errors.email.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* 郵便番号 */}
          <Grid xs={4}>
            <label css={forms.label}>郵便番号</label>
            <div css={forms.flexCenter}>
              <input
                placeholder="000"
                maxLength={3}
                css={[forms.input, errors.zip_code1 && forms.error]}
                {...register('zip_code1')}
              />
              -
              <input
                placeholder="0000"
                maxLength={4}
                css={[forms.input, errors.zip_code2 && forms.error]}
                {...register('zip_code2')}
              />
            </div>
            <div css={forms.flexCenter}>
              {errors.zip_code1 && (
                <div css={forms.errText}>{errors.zip_code1.message}</div>
              )}
              {errors.zip_code2 && (
                <div css={forms.errText}>{errors.zip_code2.message}</div>
              )}
            </div>
          </Grid>
          <Grid xs={8}></Grid>
          {/* 都道府県 */}
          <Grid xs={3}>
            <label htmlFor="pref" css={forms.label}>
              都道府県
            </label>
            <select css={forms.input} {...register('pref')}>
              {prefs &&
                Object.entries(prefs).map((pref) => (
                  <option key={pref[0]} value={pref[0]}>
                    {pref[1]}
                  </option>
                ))}
            </select>
          </Grid>
          <Grid xs={9}></Grid>
          {/* 市区町村 */}
          <Grid xs={6}>
            <label htmlFor="city" css={forms.label}>
              市区町村
            </label>
            <input
              id="city"
              placeholder="市区町村"
              css={[forms.input, errors.city && forms.error]}
              {...register('city')}
            />
            {errors.city && (
              <div css={forms.errText}>{errors.city.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* 丁目番号地 */}
          <Grid xs={6}>
            <label htmlFor="address" css={forms.label}>
              丁目番号地
            </label>
            <input
              id="address"
              placeholder="丁目番号地"
              css={[forms.input, errors.address && forms.error]}
              {...register('address')}
            />
            {errors.address && (
              <div css={forms.errText}>{errors.address.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* 建物名*/}
          <Grid xs={6}>
            <label htmlFor="building" css={forms.label}>
              建物名
            </label>
            <input
              id="building"
              placeholder="建物名"
              css={[forms.input, errors.building && forms.error]}
              {...register('building')}
            />
            {errors.building && (
              <div css={forms.errText}>{errors.building.message}</div>
            )}
          </Grid>
          <Grid xs={6}></Grid>
          {/* 電話番号 */}
          <Grid xs={6}>
            <label css={forms.label}>電話番号</label>
            <div css={forms.flexCenter}>
              <input
                placeholder="000"
                css={[forms.input, errors.tel1 && forms.error]}
                {...register('tel1')}
              />
              <input
                placeholder="0000"
                css={[forms.input, errors.tel2 && forms.error]}
                {...register('tel2')}
              />
              <input
                placeholder="0000"
                css={[forms.input, errors.tel3 && forms.error]}
                {...register('tel3')}
              />
            </div>
            <div css={forms.flexCenter}>
              {(errors.tel1 || errors.tel2 || errors.tel3) && (
                <div css={forms.errText}>入力が必須の項目です</div>
              )}
            </div>
          </Grid>
          <Grid xs={6}></Grid>
          {/* 性別 */}
          <Grid xs={6}>
            <div css={forms.label}>性別</div>
            <label css={forms.radioLabel}>
              <input
                type="radio"
                value="1"
                css={forms.radioInput}
                {...register('sex')}
              />
              男性
            </label>
            <label css={forms.radioLabel}>
              <input
                type="radio"
                value="2"
                css={forms.radioInput}
                {...register('sex')}
              />
              女性
            </label>
          </Grid>
          <Grid xs={6}></Grid>
          {/* メモ */}
          <Grid xs={9}>
            <label htmlFor="memo" css={forms.label}>
              メモ
            </label>
            <textarea
              id="memo"
              placeholder="メモ"
              rows={5}
              css={[forms.input, errors.memo && forms.error]}
              {...register('memo')}
            />
            {errors.memo && (
              <div css={forms.errText}>{errors.memo.message}</div>
            )}
          </Grid>
          <Grid xs={3}></Grid>
          {/* ボタン */}
          <Grid xs={6} css={forms.buttonWrap}>
            <Button type="submit" variant="contained">
              保存
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}
