# html-tailwindcss

### criar file style

    styles.css

### fill the style with tailwindcss class

    npx tailwindcss -o styles.css

### add jit and remove not used class

    npx tailwindcss -o styles.css --jit --purge './**/*.html'

### wacth the process

    npx tailwindcss -o styles.css --jit --purge './**/*.html' -w

### use the diferents classes

    crete teh file:
    tailwind.css
    ***
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    @layer components {
        .btn {
            @apply px-4 py-2 bg-blue-600 text-white rounded;
            }
        }
    ***

    npx tailwindcss -i tailwind.css -o styles.css --jit --purge './**/*.html' -w




    