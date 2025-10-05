import { Button, Separator } from "../ui";

function AppFooter() {
  return (
    <footer className="w-full flex flex-col items-center justify-center bg-[#121212]">
      <div className="w-full max-w-[1328px] flex flex-col gap-6 p-6 pb-18">
        <div className="w-full flex items-start justify-between">
          <div className="flex flex-col items-start justify-between gap-4">
            <div className="flex flex-col items-start">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">나의 착습 여정이,</h3>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">나만의 창작으로 이어지는 플랫폼</h3>
            </div>
            <div className="flex items-center gap-2">
              <Button variant={"outline"} size={"icon"} className="border-0">
                <img src="/assets/icons/icon-001.svg" alt="@SNS" className="w-6 h-6 mt-[2px]" />
              </Button>
              <Button variant={"outline"} size={"icon"} className="border-0">
                <img src="/assets/icons/icon-002.svg" alt="@SNS" className="w-[22px] h-[22px]" />
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <p className="cursor-pointer transition-all duration-300 hover:font-medium">이용약관</p>
            <Separator orientation="vertical" className="!h-[14px]" />
            <p className="cursor-pointer transition-all duration-300 hover:font-medium">개인정보처리방침</p>
            <Separator orientation="vertical" className="!h-[14px]" />
            <p className="cursor-pointer transition-all duration-300 hover:font-medium">클래스 론칭 문의</p>
          </div>
        </div>
        <Separator />
        <div className="w-full flex items-start justify-between">
          <div className="h-full flex flex-col justify-between">
            <div className="flex flex-col">
              <p className="h-10 text-base font-semibold">고객센터</p>
              <div className="flex flex-col items-start gap-1">
                <p>평일 오전 9시 ~ 오후 6시</p>
                <p>문의 : leegh0702@gmail.com</p>
              </div>
            </div>
            <p>© LGH all rights reserved</p>
          </div>
          <div className="flex flex-col mr-[66px]">
              <p className="h-10 text-base font-semibold">사업자 정보</p>
              <div className="flex flex-col items-start gap-1">
                <p>개발자 : LGH</p>
                <p>사업자 번호 : 123-45-6789</p>
                <p>통신판매신고번호 : 2025-2025-2025</p>
                <p>주소 : 경기 군포시</p>
                <p>대표 메일 : leegh0702@gmail.com</p>
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { AppFooter };
