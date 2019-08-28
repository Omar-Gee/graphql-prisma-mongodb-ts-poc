export function feed(parent, args, context, info) {
  return context.prisma.links()
}
export function users(parent, args, context, info) {
  return context.prisma.users()
}