import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
    const date = new Date(input)
    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    })
}

export function absoluteUrl(path: string) {
    return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

export function truncate(str: string, length: number) {
    return str.length > length ? `${str.substring(0, length)}...` : str
}

export function slugify(str: string) {
    return str
        .toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-')
}

export function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export function getInitials(name: string) {
    return name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
}

