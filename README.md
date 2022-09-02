# Gist API

```console
$ npm i @tsukiroku/gist
```

-   [Gist API](./README.md#gist-api)
-   [Docs](./README.md#docs)
-   [Status codes](./README.md#status-codes)

---

# Docs

## Initialize

> **Note:** Account token required. See [Docs](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

```ts
import Gist from '@tsukiroku/gist'

const gist = new Gist('token')
```

<br>

## Create Gist

| Parameter     | Type          |
| ------------- | ------------- |
| `files`       | `GistFile`    |
| `description` | `string`      |
| `options?`    | `GistOptions` |

> **GistFile**
>
> ```ts
> { 'file name': { content: 'content' }, ... },
> ```

> **GistOptions**
>
> ```ts
> { secret: boolean, ... }
> ```
>
> **Note:** **secret** default: true

> **return:** [`Promise<ReqRet<GistResponse>>`](./src/types.ts)

```ts
await gist
    .create(
        {
            file_name: { content: 'File Content' },
            file_name_2: { content: 'File Content 2' },
        },
        'test file'
        // { secret: true }
    )
    .then((res) => console.log(`Gist created: ${res.data!.id}`))
    .catch((err) => console.log(err))
```

<br>

## Get Gist

| Parameter | Type     |
| --------- | -------- |
| `id`      | `number` |

> **return:** [`Promise<ReqRet<GistResponse>>`](./src/types.ts)

```ts
await gist
    .get('gist id')
    .then((res) => console.log(`gist description: ${res.data!.description}`))
    .catch((err) => console.log(err))
```

<br>

## Update Gist

| Parameter     | Type          |
| ------------- | ------------- |
| `id`          | `number`      |
| `files`       | `GistFile`    |
| `description` | `string`      |
| `options?`    | `GistOptions` |

> **return:** [`Promise<ReqRet<{}>>`](./src/types.ts)
>
> **Note:** `res.data` is undefined.

```ts
await gist
    .update(
        'gist id',
        {
            file_name: { content: 'File Content' },
            file_name_2: { content: 'File Content 2' },
            file_name_3: { content: 'File Content 3' },
        },
        'test file - update'
        // { secret: true }
    )
    .then((res) => console.log(`Gist updated: ${res.status.code}`))
    .catch((err) => console.log(err))
```

<br>

## Delete Gist

| Parameter | Type     |
| --------- | -------- |
| `id`      | `number` |

> **return:** [`Promise<ReqRet<{}>>`](./src/types.ts)
>
> **Note:** `res.data` is undefined.

```ts
await gist
    .delete(gist_id)
    .then((res) => console.log(`Gist deleted, status: ${res.status.code}`))
    .catch((err) => console.log(err))
```

<br>

---

# Status codes

> **ref:** [http_status.ts](./src/structures/http_status.ts)

| Status code | Name                  |
| ----------- | --------------------- |
| 200         | OK                    |
| 201         | CREATED               |
| 204         | NO_CONTENT            |
| 304         | NOT_MODIFIED          |
| 400         | BAD_REQUEST           |
| 401         | UNAUTHORIZED          |
| 403         | FORBIDDEN             |
| 404         | NOT_FOUND             |
| 409         | CONFLICT              |
| 422         | VAILDATION_FAILED     |
| 500         | INTERNAL_SERVER_ERROR |
| 502         | BAD_GATEWAY           |
| 503         | SERVICE_UNAVAILABLE   |
| 504         | GATEWAY_TIMEOUT       |
| -1          | UNKNOWN               |

---

[**LICENSE: MIT**](./LICENSE)

---

> Click [here](https://docs.github.com/en/rest/gists) for more information on the github gists rest API.
