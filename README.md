# Gist API

```sh
npm i @tsukiroku/gist
```

---

# Docs

<br>

## Initialize

> Account token required. See [Docs](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

```ts
import Gist from "@tsukiroku/gist";

const gist = new Gist("token");
```

<br>

## Create Gist

| Parameter     | Type        |
| ------------- | ----------- |
| `files`       | GistFile    |
| `description` | string      |
| `options`     | GistOptions |

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
> **secret** default: true

> **return:** [`Promise<GistResponse>`](./src/types.ts)

```ts
await gist
    .create(
        {
            file_name: { content: "File Content" },
            file_name_2: { content: "File Content 2" },
        },
        "test file"
        // { secret: true }
    )
    .then((res) => {
        console.log(`Gist created: ${gist_id}`);
    })
    .catch((err) => console.log(err));
```

<br>

## Get Gist

| Parameter | Type   |
| --------- | ------ |
| `id`      | number |

> **return:** [`Promise<GistResponse>`](./src/types.ts)

```ts
await gist
    .get("gist id")
    .then((res) => console.log(`gist description: ${res.description}`))
    .catch((err) => console.log(err));
```

<br>

## Delete Gist

| Parameter | Type   |
| --------- | ------ |
| `id`      | number |

```ts
await gist
    .delete("gist id")
    .then((_) => console.log("deleted"))
    .catch((err) => console.log(err));
```

<br>

---

<br>

# Example

```ts
import Gist from "./index";

(async () => {
    const gist = new Gist("token");

    let gist_id: string = "";

    await gist
        .create(
            {
                "index.ts": { content: "console.log('Hello, World!');" },
                "main.rs": { content: "fn main() {}" },
            },
            "test gist",
            { secret: true }
        )
        .then((res) => {
            gist_id = res.id;
            console.log(`Gist created: ${gist_id}`);
        })
        .catch((err) => console.log(err));

    await gist
        .get(gist_id)
        .then((res) => console.log(`gist description: ${res.description}`))
        .catch((err) => console.log(err));

    await gist
        .delete(gist_id)
        .then((_) => console.log("deleted"))
        .catch((err) => console.log(err));
})();
```
