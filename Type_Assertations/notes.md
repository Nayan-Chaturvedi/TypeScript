# Typescript
manually TypeScript ko specify karte ho ki kaunse type ka variable hai.

explain

- hamne document. query selector se ek element select kiye p(mean paragraph)
```javascript
const para =document.querySelector("p");

```

- Hamne ek function banaya aur hame pata hai ki ye para ek html element hai.
```javascript
function abcd(para:HTMLParagraphElement)
```

-- agar para ki jagah div ho tab hum
```javascript
function abcd(para:HTMLDivElement)
```
-- agar wo span tag hoga tb 

```javascript
function abcd(para:HTMLSpanlement)
```

---

```javascript
const para =document.querySelector("p");

```

ish line ko hum function me eshe likhege
```typescript
function abcd()
{
    document.querySelector("p") as HTMLParagraphElement;
}
```
