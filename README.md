# Fernando Almeida — Premium Data Analyst Portfolio

Portfolio React + Vite, preparado para GitHub Pages, com:

- Design premium e responsivo
- Conteúdo em inglês por defeito
- Switch EN/PT no topo
- Secção clara de valor para empresas
- Mockups de dashboards interativos
- Experiência mais generalista, sem "Head of Data Department"
- Área para fotografia de perfil

## Como atualizar o site live

Depois de substituir os ficheiros no teu projeto:

```powershell
npm run build
git add .
git commit -m "Upgrade premium portfolio"
git push
```

Depois vai ao GitHub > Actions, espera ficar verde e faz Ctrl + F5 no site.

## Como colocar a fotografia de perfil

Neste ZIP ainda está um placeholder em:

```text
public/profile-placeholder.svg
```

Opção simples: substitui esse ficheiro por uma fotografia tua, mantendo exatamente o mesmo nome:

```text
profile-placeholder.svg
```

Opção recomendada: coloca uma foto tua em:

```text
public/profile.jpg
```

Depois abre `src/App.jsx` e troca:

```js
photo: './profile-placeholder.svg'
```

por:

```js
photo: './profile.jpg'
```

Guarda, faz build e push.

## Comandos úteis

Testar localmente:

```powershell
npm run dev
```

Testar se compila:

```powershell
npm run build
```

Publicar alterações:

```powershell
git add .
git commit -m "Update portfolio"
git push
```
