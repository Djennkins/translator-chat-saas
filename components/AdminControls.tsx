function AdminControls({ chatId }: { chatId: string }): JSX.Element {
    return (
        <div className="flex justify-end space-x-2 m-5 mb-0">
            {/*<InviteUser chatId={chatId}></InviteUser>*/}
            {/*<DeleteChatButton chatId={chatId}></DeleteChatButton>*/}
        </div>
    );
}

export default AdminControls;