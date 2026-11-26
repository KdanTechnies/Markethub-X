import { endpointPending } from "./api-contract";

// TODO: Confirm from OpenAPI spec before defining message routes or realtime transport.
export const messagesService = {
  listConversations: (): never => endpointPending("messages", "conversation list"),
  getMessages: (_conversationId: string): never => endpointPending("messages", "message history"),
  sendMessage: (_conversationId: string, _draft: unknown): never =>
    endpointPending("messages", "send message"),
};
